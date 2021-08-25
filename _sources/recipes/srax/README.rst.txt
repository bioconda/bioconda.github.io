:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srax'
.. highlight: bash

srax
====

.. conda:recipe:: srax
   :replaces_section_title:
   :noindex:

   Systematic Resistome Analysis

   :homepage: https://github.com/lgpdevtools/sraX
   :documentation: https://github.com/lgpdevtools/sraX/blob/master/doc/sraX_user_manual.pdf
   
   :license: GPL-3.0-only
   :recipe: /`srax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2020.00052`

   


.. conda:package:: srax

   |downloads_srax| |docker_srax|

   :versions:
      
      

      ``1.5-1``,  ``1.5-0``,  ``1.4-0``

      

   
   :depends blast: ``>=2.9``
   :depends clustalo: ``>=1.2.4``
   :depends diamond: ``>=0.9.29``
   :depends mafft: ``>=7.455``
   :depends muscle: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-env-path: 
   :depends perl-file-path: 
   :depends perl-file-slurp: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-io-socket-ssl: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: 
   :depends perl-net-ssleay: 
   :depends perl-parallel-forkmanager: 
   :depends perl-text-csv: 
   :depends unzip: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srax

   and update with::

      conda update srax

   or use the docker container::

      docker pull quay.io/biocontainers/srax:<tag>

   (see `srax/tags`_ for valid values for ``<tag>``)


.. |downloads_srax| image:: https://img.shields.io/conda/dn/bioconda/srax.svg?style=flat
   :target: https://anaconda.org/bioconda/srax
   :alt:   (downloads)
.. |docker_srax| image:: https://quay.io/repository/biocontainers/srax/status
   :target: https://quay.io/repository/biocontainers/srax
.. _`srax/tags`: https://quay.io/repository/biocontainers/srax?tab=tags


.. raw:: html

    <script>
        var package = "srax";
        var versions = ["1.5","1.5","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srax/README.html