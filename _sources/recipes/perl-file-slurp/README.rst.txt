:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-slurp'
.. highlight: bash

perl-file-slurp
===============

.. conda:recipe:: perl-file-slurp
   :replaces_section_title:
   :noindex:

   Simple and Efficient Reading\/Writing\/Modifying of Complete Files

   :homepage: http://metacpan.org/pod/File::Slurp
   :license: perl_5
   :recipe: /`perl-file-slurp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp/meta.yaml>`_

   


.. conda:package:: perl-file-slurp

   |downloads_perl-file-slurp| |docker_perl-file-slurp|

   :versions:
      
      

      ``9999.27-1``,  ``9999.27-0``,  ``9999.25-0``,  ``9999.24-0``,  ``9999.19-3``,  ``9999.19-2``,  ``9999.19-1``,  ``9999.19-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-slurp

   and update with::

      conda update perl-file-slurp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-slurp:<tag>

   (see `perl-file-slurp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-slurp| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-slurp
   :alt:   (downloads)
.. |docker_perl-file-slurp| image:: https://quay.io/repository/biocontainers/perl-file-slurp/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurp
.. _`perl-file-slurp/tags`: https://quay.io/repository/biocontainers/perl-file-slurp?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-slurp";
        var versions = ["9999.27","9999.27","9999.25","9999.24","9999.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurp/README.html