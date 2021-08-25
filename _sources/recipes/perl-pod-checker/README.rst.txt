:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-checker'
.. highlight: bash

perl-pod-checker
================

.. conda:recipe:: perl-pod-checker/1.60
   :replaces_section_title:
   :noindex:

   Pod\:\:Checker verifies POD documentation contents for compliance with the POD format specifications

   :homepage: http://metacpan.org/pod/Pod::Checker
   :license: perl_5
   :recipe: /`perl-pod-checker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker>`_/`1.60 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker/1.60>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker/1.60/meta.yaml>`_

   


.. conda:package:: perl-pod-checker

   |downloads_perl-pod-checker| |docker_perl-pod-checker|

   :versions:
      
      

      ``1.60-2``,  ``1.60-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-pod-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-checker

   and update with::

      conda update perl-pod-checker

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-checker:<tag>

   (see `perl-pod-checker/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-checker| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-checker.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-checker
   :alt:   (downloads)
.. |docker_perl-pod-checker| image:: https://quay.io/repository/biocontainers/perl-pod-checker/status
   :target: https://quay.io/repository/biocontainers/perl-pod-checker
.. _`perl-pod-checker/tags`: https://quay.io/repository/biocontainers/perl-pod-checker?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-checker";
        var versions = ["1.60","1.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-checker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-checker/README.html