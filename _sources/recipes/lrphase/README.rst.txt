:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrphase'
.. highlight: bash

lrphase
=======

.. conda:recipe:: lrphase
   :replaces_section_title:
   :noindex:

   Phasing individual long reads using known haplotype information.

   :homepage: https://github.com/Boyle-Lab/LRphase.git
   :license: MIT / MIT
   :recipe: /`lrphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrphase/meta.yaml>`_

   


.. conda:package:: lrphase

   |downloads_lrphase| |docker_lrphase|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.7.13-0``,  ``0.7.12-0``,  ``0.7.10-0``,  ``0.7.6-0``,  ``0.7.5-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on numpy: ``>=1.20.1``
   :depends on powerlaw: ``>=1.4.6``
   :depends on pyliftover: ``>=0.4``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.26.0``

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

    pixi global install lrphase

to add into an existing workspace instead, run::

    pixi add lrphase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lrphase

Alternatively, to install into a new environment, run::

    conda create -n envname lrphase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lrphase:<tag>

(see `lrphase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lrphase| image:: https://img.shields.io/conda/dn/bioconda/lrphase.svg?style=flat
   :target: https://anaconda.org/bioconda/lrphase
   :alt:   (downloads)
.. |docker_lrphase| image:: https://quay.io/repository/biocontainers/lrphase/status
   :target: https://quay.io/repository/biocontainers/lrphase
.. _`lrphase/tags`: https://quay.io/repository/biocontainers/lrphase?tab=tags


.. raw:: html

    <script>
        var package = "lrphase";
        var versions = ["1.1.2","1.1.0","1.0.0","0.7.13","0.7.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrphase/README.html