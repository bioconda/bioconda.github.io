:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trackhub'
.. highlight: bash

trackhub
========

.. conda:recipe:: trackhub
   :replaces_section_title:
   :noindex:

   Create and manage UCSC track hubs from Python

   :homepage: http://github.com/daler/trackhub
   :license: MIT
   :recipe: /`trackhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub/meta.yaml>`_

   


.. conda:package:: trackhub

   |downloads_trackhub| |docker_trackhub|

   :versions:
      
      

      ``1.0-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.1.2019.12.24-1``,  ``0.1.2019.12.24-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on beautifulsoup4: 
   :depends on docutils: 
   :depends on html5lib: 
   :depends on openpyxl: 
   :depends on python: 
   :depends on requests: 

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

    pixi global install trackhub

to add into an existing workspace instead, run::

    pixi add trackhub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trackhub

Alternatively, to install into a new environment, run::

    conda create -n envname trackhub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trackhub:<tag>

(see `trackhub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trackhub| image:: https://img.shields.io/conda/dn/bioconda/trackhub.svg?style=flat
   :target: https://anaconda.org/bioconda/trackhub
   :alt:   (downloads)
.. |docker_trackhub| image:: https://quay.io/repository/biocontainers/trackhub/status
   :target: https://quay.io/repository/biocontainers/trackhub
.. _`trackhub/tags`: https://quay.io/repository/biocontainers/trackhub?tab=tags


.. raw:: html

    <script>
        var package = "trackhub";
        var versions = ["1.0","0.2.4","0.2.4","0.2.4","0.1.2019.12.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trackhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trackhub/README.html