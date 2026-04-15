:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'majec'
.. highlight: bash

majec
=====

.. conda:recipe:: majec
   :replaces_section_title:
   :noindex:

   Momentum\-Accelerated Junction\-Enhanced Counting for RNA\-seq quantification

   :homepage: https://github.com/calico/majec
   :license: Apache / Apache-2.0
   :recipe: /`majec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/majec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/majec/meta.yaml>`_

   MAJEC is a unified framework for quantifying genes\, transcript isoforms\,
   and individual transposable element loci from aligned RNA\-seq reads \(BAM files\)
   in a single analysis. It uses a junction\-informed Expectation\-Maximization
   algorithm operating on a joint gene\+TE feature space.



.. conda:package:: majec

   |downloads_majec| |docker_majec|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.2-0``

      

   
   :depends on bedtools: ``>=2.31``
   :depends on intervaltree: ``>=3.1``
   :depends on numpy: ``>=2.3``
   :depends on pandas: ``>=2.3``
   :depends on polars: ``>=1.33``
   :depends on python: ``>=3.11``
   :depends on samtools: ``>=1.20``
   :depends on scipy: ``>=1.16``
   :depends on subread: ``>=2.0``

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

    pixi global install majec

to add into an existing workspace instead, run::

    pixi add majec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install majec

Alternatively, to install into a new environment, run::

    conda create -n envname majec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/majec:<tag>

(see `majec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_majec| image:: https://img.shields.io/conda/dn/bioconda/majec.svg?style=flat
   :target: https://anaconda.org/bioconda/majec
   :alt:   (downloads)
.. |docker_majec| image:: https://quay.io/repository/biocontainers/majec/status
   :target: https://quay.io/repository/biocontainers/majec
.. _`majec/tags`: https://quay.io/repository/biocontainers/majec?tab=tags


.. raw:: html

    <script>
        var package = "majec";
        var versions = ["0.1.4","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/majec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/majec/README.html