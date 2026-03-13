:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubgator'
.. highlight: bash

pubgator
========

.. conda:recipe:: pubgator
   :replaces_section_title:
   :noindex:

   A lightweight python wrapper for the PubTator3 API.
   PubGator allows to easily interact with the PubTator API.
   It provides a simple interface to search for publications\, retrieve full annotations\, and find entities and relations.
   It also automatically handles pagination and rate limiting.


   :homepage: https://github.com/koesterlab/pubgator
   :license: MIT
   :recipe: /`pubgator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubgator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubgator/meta.yaml>`_

   


.. conda:package:: pubgator

   |downloads_pubgator| |docker_pubgator|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on bioc: ``>=2.1,<3``
   :depends on httpx: ``>=0.28.1,<0.29``
   :depends on python: ``>=3.11``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install pubgator

to add into an existing workspace instead, run::

    pixi add pubgator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pubgator

Alternatively, to install into a new environment, run::

    conda create -n envname pubgator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pubgator:<tag>

(see `pubgator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pubgator| image:: https://img.shields.io/conda/dn/bioconda/pubgator.svg?style=flat
   :target: https://anaconda.org/bioconda/pubgator
   :alt:   (downloads)
.. |docker_pubgator| image:: https://quay.io/repository/biocontainers/pubgator/status
   :target: https://quay.io/repository/biocontainers/pubgator
.. _`pubgator/tags`: https://quay.io/repository/biocontainers/pubgator?tab=tags


.. raw:: html

    <script>
        var package = "pubgator";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubgator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubgator/README.html