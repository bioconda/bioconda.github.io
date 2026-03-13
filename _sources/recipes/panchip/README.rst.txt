:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panchip'
.. highlight: bash

panchip
=======

.. conda:recipe:: panchip
   :replaces_section_title:
   :noindex:

   Pan\-ChIP\-seq Analysis of Peak Sets

   :homepage: https://github.com/hanjunlee21/PanChIP
   :license: MIT
   :recipe: /`panchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panchip/meta.yaml>`_

   


.. conda:package:: panchip

   |downloads_panchip| |docker_panchip|

   :versions:
      
      

      ``3.0.14-0``

      

   
   :depends on bash: 
   :depends on coreutils: 
   :depends on gawk: 
   :depends on pandas: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on scipy: 
   :depends on sed: 

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

    pixi global install panchip

to add into an existing workspace instead, run::

    pixi add panchip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panchip

Alternatively, to install into a new environment, run::

    conda create -n envname panchip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panchip:<tag>

(see `panchip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panchip| image:: https://img.shields.io/conda/dn/bioconda/panchip.svg?style=flat
   :target: https://anaconda.org/bioconda/panchip
   :alt:   (downloads)
.. |docker_panchip| image:: https://quay.io/repository/biocontainers/panchip/status
   :target: https://quay.io/repository/biocontainers/panchip
.. _`panchip/tags`: https://quay.io/repository/biocontainers/panchip?tab=tags


.. raw:: html

    <script>
        var package = "panchip";
        var versions = ["3.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panchip/README.html