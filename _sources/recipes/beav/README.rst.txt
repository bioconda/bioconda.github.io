:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beav'
.. highlight: bash

beav
====

.. conda:recipe:: beav
   :replaces_section_title:
   :noindex:

   beav\: Bacterial genome and mobile element annotation pipeline

   :homepage: https://github.com/weisberglab/beav
   :license: GPL / GPL-3.0
   :recipe: /`beav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav/meta.yaml>`_

   


.. conda:package:: beav

   |downloads_beav| |docker_beav|

   :versions:
      
      

      ``0.2-0``,  ``0.0.14-0``,  ``0.0.13-0``

      

   
   :depends antismash-lite: 
   :depends bakta: ``>=1.6``
   :depends bbmap: 
   :depends bedtools: ``>=2.27.1``
   :depends biopython: ``>=1.78,<=1.79``
   :depends blast: ``>=2.6.0``
   :depends blast-legacy: 
   :depends defense-finder: 
   :depends emboss: 
   :depends fastani: 
   :depends gzip: 
   :depends hmmer: ``>=3.3.2``
   :depends infernal: ``>=1.1.2``
   :depends integron_finder: ``>=2.0.1``
   :depends macsyfinder: 
   :depends numpy: ``>=1.19.4,<=1.22.1``
   :depends pandas: ``>=1.1.5,<=1.4.0``
   :depends perl: ``>=5.22.0``
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-ipc-run3: 
   :depends pftools: 
   :depends prokka: ``>=1.11``
   :depends python: ``>=3.7,<=3.10``
   :depends scikit-learn: 
   :depends tqdm: 
   :depends trnascan-se: ``>=2.0.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beav

   and update with::

      conda update beav

   or use the docker container::

      docker pull quay.io/biocontainers/beav:<tag>

   (see `beav/tags`_ for valid values for ``<tag>``)


.. |downloads_beav| image:: https://img.shields.io/conda/dn/bioconda/beav.svg?style=flat
   :target: https://anaconda.org/bioconda/beav
   :alt:   (downloads)
.. |docker_beav| image:: https://quay.io/repository/biocontainers/beav/status
   :target: https://quay.io/repository/biocontainers/beav
.. _`beav/tags`: https://quay.io/repository/biocontainers/beav?tab=tags


.. raw:: html

    <script>
        var package = "beav";
        var versions = ["0.2","0.0.14","0.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beav/README.html