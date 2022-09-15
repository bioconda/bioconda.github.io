:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirnature'
.. highlight: bash

mirnature
=========

.. conda:recipe:: mirnature
   :replaces_section_title:
   :noindex:

   MiRNAture improves on ideas from MIRfix and integrates it with homology search. miRNAture is specifically designed to identify and annotate metazoan miRNAs in a homology\-based setting and is complementary to tools and pipelines that extract miRNA candidates from small RNA\-seq data

   :homepage: https://github.com/Bierinformatik/miRNAture
   :license: GPL / GPL-3.0
   :recipe: /`mirnature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirnature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirnature/meta.yaml>`_

   


.. conda:package:: mirnature

   |downloads_mirnature| |docker_mirnature|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends blast: ``2.9.0.*``
   :depends blast-legacy: ``2.2.26.*``
   :depends clustalo: ``1.2.4.*``
   :depends hmmer: ``3.3.*``
   :depends infernal: ``1.1.2.*``
   :depends mirfix: ``2.0.0.*``
   :depends nettle: ``3.3.*``
   :depends perl: ``5.26.2.*``
   :depends perl-bioperl: ``1.7.2.*``
   :depends perl-file-copy-recursive: ``0.45.*``
   :depends perl-file-share: ``0.25.*``
   :depends perl-file-sharedir: ``1.116.*``
   :depends perl-getopt-long: ``2.50.*``
   :depends perl-module-build: ``0.4224.*``
   :depends perl-moose: ``2.2011.*``
   :depends perl-moosex-types: ``0.50.*``
   :depends perl-moosex-types-path-class: ``0.09.*``
   :depends perl-regexp-common: ``2017060201.*``
   :depends perl-statistics-r: ``0.34 pl526r351_3``
   :depends perl-sub-name: ``0.21.*``
   :depends perl-yaml-tiny: ``1.73.*``
   :depends r-base: ``3.5.1.*``
   :depends r-dplyr: ``0.8.5.*``
   :depends rmblast: ``2.9.0.*``
   :depends viennarna: ``2.4.17.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirnature

   and update with::

      conda update mirnature

   or use the docker container::

      docker pull quay.io/biocontainers/mirnature:<tag>

   (see `mirnature/tags`_ for valid values for ``<tag>``)


.. |downloads_mirnature| image:: https://img.shields.io/conda/dn/bioconda/mirnature.svg?style=flat
   :target: https://anaconda.org/bioconda/mirnature
   :alt:   (downloads)
.. |docker_mirnature| image:: https://quay.io/repository/biocontainers/mirnature/status
   :target: https://quay.io/repository/biocontainers/mirnature
.. _`mirnature/tags`: https://quay.io/repository/biocontainers/mirnature?tab=tags


.. raw:: html

    <script>
        var package = "mirnature";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirnature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirnature/README.html