:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-negotiate'
.. highlight: bash

perl-http-negotiate
===================

.. conda:recipe:: perl-http-negotiate
   :replaces_section_title:
   :noindex:

   choose a variant to serve

   :homepage: http://metacpan.org/pod/HTTP::Negotiate
   :license: perl_5
   :recipe: /`perl-http-negotiate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-negotiate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-negotiate/meta.yaml>`_

   


.. conda:package:: perl-http-negotiate

   |downloads_perl-http-negotiate| |docker_perl-http-negotiate|

   :versions:
      
      

      ``6.01-4``,  ``6.01-3``,  ``6.01-2``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-http-message: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-negotiate

   and update with::

      conda update perl-http-negotiate

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-negotiate:<tag>

   (see `perl-http-negotiate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-negotiate| image:: https://img.shields.io/conda/dn/bioconda/perl-http-negotiate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-negotiate
   :alt:   (downloads)
.. |docker_perl-http-negotiate| image:: https://quay.io/repository/biocontainers/perl-http-negotiate/status
   :target: https://quay.io/repository/biocontainers/perl-http-negotiate
.. _`perl-http-negotiate/tags`: https://quay.io/repository/biocontainers/perl-http-negotiate?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-negotiate";
        var versions = ["6.01","6.01","6.01","6.01","6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-negotiate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-negotiate/README.html