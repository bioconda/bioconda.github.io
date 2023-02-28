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
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.13.0``
   :depends clustalo: ``>=1.2.4``
   :depends hmmer: ``>=3.3.2``
   :depends infernal: ``>=1.1.4``
   :depends mirfix: ``>=2.1.1``
   :depends parallel: ``>=20220922``
   :depends perl: ``>=5.32.1``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.6.924``
   :depends perl-file-copy-recursive: ``>=0.45``
   :depends perl-io-string: ``>=1.08``
   :depends perl-io-stringy: ``>=2.113``
   :depends perl-module-build: ``>=0.4224``
   :depends perl-module-implementation: ``>=0.09``
   :depends perl-moose: ``>=2.2201``
   :depends perl-moosex-types-path-class: ``>=0.09``
   :depends perl-statistics-r: ``>=0.34``
   :depends perl-yaml-tiny: ``>=1.73``
   :depends pyfaidx: ``>=0.7.1``
   :depends python: ``>3``
   :depends r-base: ``>=4.1.0``
   :depends r-dplyr: ``>=1.0.10``
   :depends rmblast: ``>=2.9.0``
   :depends viennarna: ``>=2.4.15``
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
        var versions = ["1.1","1.1","1.1","1.0","1.0"];
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