:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consplice'
.. highlight: bash

consplice
=========

.. conda:recipe:: consplice
   :replaces_section_title:
   :noindex:

   The Constrained Splicing \(ConSplice\) python module

   :homepage: https://github.com/mikecormier/ConSplice
   :license: MIT
   :recipe: /`consplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consplice/meta.yaml>`_

   ConSplice is a python module used to \(1\) model the splicing constraint in the human genome\, and \(2\) an ensembl machine learning metric to score genetic variants for pathogenic splicing.


.. conda:package:: consplice

   |downloads_consplice| |docker_consplice|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends bcftools: 
   :depends biopython: 
   :depends cyvcf2: 
   :depends gsort: 
   :depends gsort: ``>=0.1.4``
   :depends htslib: 
   :depends interlap: 
   :depends ncls: ``0.0.53.*``
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends pyranges: ``0.0.92.*``
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install consplice

   and update with::

      mamba update consplice

  To create a new environment, run::

      mamba create --name myenvname consplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/consplice:<tag>

   (see `consplice/tags`_ for valid values for ``<tag>``)


.. |downloads_consplice| image:: https://img.shields.io/conda/dn/bioconda/consplice.svg?style=flat
   :target: https://anaconda.org/bioconda/consplice
   :alt:   (downloads)
.. |docker_consplice| image:: https://quay.io/repository/biocontainers/consplice/status
   :target: https://quay.io/repository/biocontainers/consplice
.. _`consplice/tags`: https://quay.io/repository/biocontainers/consplice?tab=tags


.. raw:: html

    <script>
        var package = "consplice";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consplice/README.html