:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-maybexs'
.. highlight: bash

perl-json-maybexs
=================

.. conda:recipe:: perl-json-maybexs
   :replaces_section_title:
   :noindex:

   Use Cpanel\:\:JSON\:\:XS with a fallback to JSON\:\:XS and JSON\:\:PP

   :homepage: http://metacpan.org/pod/JSON::MaybeXS
   :license: perl_5
   :recipe: /`perl-json-maybexs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-maybexs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-maybexs/meta.yaml>`_

   


.. conda:package:: perl-json-maybexs

   |downloads_perl-json-maybexs| |docker_perl-json-maybexs|

   :versions:
      
      

      ``1.004000-1``,  ``1.004000-0``,  ``1.003008-1``,  ``1.003008-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-json-pp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-maybexs

   and update with::

      conda update perl-json-maybexs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json-maybexs:<tag>

   (see `perl-json-maybexs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-maybexs| image:: https://img.shields.io/conda/dn/bioconda/perl-json-maybexs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-maybexs
   :alt:   (downloads)
.. |docker_perl-json-maybexs| image:: https://quay.io/repository/biocontainers/perl-json-maybexs/status
   :target: https://quay.io/repository/biocontainers/perl-json-maybexs
.. _`perl-json-maybexs/tags`: https://quay.io/repository/biocontainers/perl-json-maybexs?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-maybexs";
        var versions = ["1.004000","1.004000","1.003008","1.003008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-maybexs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-maybexs/README.html