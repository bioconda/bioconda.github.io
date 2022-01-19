:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-proc-fork'
.. highlight: bash

perl-proc-fork
==============

.. conda:recipe:: perl-proc-fork
   :replaces_section_title:
   :noindex:

   simple\, intuitive interface to the fork\(\) system call

   :homepage: http://github.com/ap/Proc-Fork
   :license: perl_5
   :recipe: /`perl-proc-fork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-proc-fork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-proc-fork/meta.yaml>`_

   


.. conda:package:: perl-proc-fork

   |downloads_perl-proc-fork| |docker_perl-proc-fork|

   :versions:
      
      

      ``0.806-1``,  ``0.806-0``,  ``0.804-1``,  ``0.804-0``

      

   
   :depends perl: ``>=5.22.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter-tidy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-proc-fork

   and update with::

      conda update perl-proc-fork

   or use the docker container::

      docker pull quay.io/biocontainers/perl-proc-fork:<tag>

   (see `perl-proc-fork/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-proc-fork| image:: https://img.shields.io/conda/dn/bioconda/perl-proc-fork.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-proc-fork
   :alt:   (downloads)
.. |docker_perl-proc-fork| image:: https://quay.io/repository/biocontainers/perl-proc-fork/status
   :target: https://quay.io/repository/biocontainers/perl-proc-fork
.. _`perl-proc-fork/tags`: https://quay.io/repository/biocontainers/perl-proc-fork?tab=tags


.. raw:: html

    <script>
        var package = "perl-proc-fork";
        var versions = ["0.806","0.806","0.804","0.804"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-proc-fork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-proc-fork/README.html