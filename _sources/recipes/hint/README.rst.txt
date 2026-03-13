:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hint'
.. highlight: bash

hint
====

.. conda:recipe:: hint
   :replaces_section_title:
   :noindex:

   HiNT is a computational method for detecting copy number variations and translocations from Hi\-C data

   :homepage: https://github.com/parklab/HiNT
   :license: MIT
   :recipe: /`hint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint/meta.yaml>`_

   


.. conda:package:: hint

   |downloads_hint| |docker_hint|

   :versions:
      
      

      ``2.2.8-1``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.1-0``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.7-0``,  ``2.0.1-0``

      

   
   :depends on argparse: ``>=1.1``
   :depends on bwa: ``>=0.7.16``
   :depends on cooler: ``0.8.3``
   :depends on h5py: ``>=2.8.0``
   :depends on htslib: ``>=1.10``
   :depends on multiprocess: ``>=0.70.5``
   :depends on numpy: ``>=1.16.1``
   :depends on openjdk: ``>=8``
   :depends on pairix: ``>=0.3.6``
   :depends on pairtools: ``>=0.2.2``
   :depends on pandas: ``>=0.23.0``
   :depends on perl: ``>=5``
   :depends on pytabix: 
   :depends on python: ``>=3.5``
   :depends on r: ``>=3.4``
   :depends on r-base: 
   :depends on r-cairo: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-mgcv: 
   :depends on r-strucchange: 
   :depends on samtools: ``>=1.10``
   :depends on scikit-learn: ``>=0.19.1``
   :depends on scipy: ``>=1.0.1``

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

    pixi global install hint

to add into an existing workspace instead, run::

    pixi add hint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hint

Alternatively, to install into a new environment, run::

    conda create -n envname hint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hint:<tag>

(see `hint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hint| image:: https://img.shields.io/conda/dn/bioconda/hint.svg?style=flat
   :target: https://anaconda.org/bioconda/hint
   :alt:   (downloads)
.. |docker_hint| image:: https://quay.io/repository/biocontainers/hint/status
   :target: https://quay.io/repository/biocontainers/hint
.. _`hint/tags`: https://quay.io/repository/biocontainers/hint?tab=tags


.. raw:: html

    <script>
        var package = "hint";
        var versions = ["2.2.8","2.2.8","2.2.7","2.2.7","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hint/README.html