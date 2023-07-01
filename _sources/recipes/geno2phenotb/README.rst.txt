:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geno2phenotb'
.. highlight: bash

geno2phenotb
============

.. conda:recipe:: geno2phenotb
   :replaces_section_title:
   :noindex:

   Machine learning based engine to predict Mycobacterium tuberculosis drug resistance using whole\-genome sequencing data

   :homepage: https://github.com/msmdev/geno2phenoTB
   :license: LGPL-3.0-only
   :recipe: /`geno2phenotb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb/meta.yaml>`_

   


.. conda:package:: geno2phenotb

   |downloads_geno2phenotb| |docker_geno2phenotb|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bwa: ``0.7.17.*``
   :depends gatk: ``3.8.*``
   :depends imbalanced-learn: ``0.8.1.*``
   :depends importlib_metadata: 
   :depends joblib: ``1.1.1.*``
   :depends mtbseq: ``1.0.4.*``
   :depends numpy: ``1.21.5.*``
   :depends numpy-base: ``1.21.5.*``
   :depends packaging: ``21.3.*``
   :depends pandas: ``0.25.3.*``
   :depends perl-base: ``2.23.*``
   :depends python: ``3.7.15.*``
   :depends samtools: ``1.6.*``
   :depends scikit-learn: ``0.24.2.*``
   :depends scipy: ``1.7.3.*``
   :depends setuptools: ``65.5.0.*``
   :depends wheel: ``0.37.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geno2phenotb

   and update with::

      conda update geno2phenotb

   or use the docker container::

      docker pull quay.io/biocontainers/geno2phenotb:<tag>

   (see `geno2phenotb/tags`_ for valid values for ``<tag>``)


.. |downloads_geno2phenotb| image:: https://img.shields.io/conda/dn/bioconda/geno2phenotb.svg?style=flat
   :target: https://anaconda.org/bioconda/geno2phenotb
   :alt:   (downloads)
.. |docker_geno2phenotb| image:: https://quay.io/repository/biocontainers/geno2phenotb/status
   :target: https://quay.io/repository/biocontainers/geno2phenotb
.. _`geno2phenotb/tags`: https://quay.io/repository/biocontainers/geno2phenotb?tab=tags


.. raw:: html

    <script>
        var package = "geno2phenotb";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geno2phenotb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geno2phenotb/README.html