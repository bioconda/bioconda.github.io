:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'card_trick'
.. highlight: bash

card_trick
==========

.. conda:recipe:: card_trick
   :replaces_section_title:
   :noindex:

   Utility package to find gene \<\-\> drug relationships within CARD

   :homepage: https://gitlab.com/cgps/card_trick
   :license: MIT / MIT
   :recipe: /`card_trick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/card_trick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/card_trick/meta.yaml>`_

   


.. conda:package:: card_trick

   |downloads_card_trick| |docker_card_trick|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends on pandas: 
   :depends on pronto: 
   :depends on python: ``>3``
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

    pixi global install card_trick

to add into an existing workspace instead, run::

    pixi add card_trick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install card_trick

Alternatively, to install into a new environment, run::

    conda create -n envname card_trick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/card_trick:<tag>

(see `card_trick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_card_trick| image:: https://img.shields.io/conda/dn/bioconda/card_trick.svg?style=flat
   :target: https://anaconda.org/bioconda/card_trick
   :alt:   (downloads)
.. |docker_card_trick| image:: https://quay.io/repository/biocontainers/card_trick/status
   :target: https://quay.io/repository/biocontainers/card_trick
.. _`card_trick/tags`: https://quay.io/repository/biocontainers/card_trick?tab=tags


.. raw:: html

    <script>
        var package = "card_trick";
        var versions = ["0.2.1","0.2.0","0.1.3","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/card_trick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/card_trick/README.html