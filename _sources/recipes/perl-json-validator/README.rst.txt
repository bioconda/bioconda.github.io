:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-validator'
.. highlight: bash

perl-json-validator
===================

.. conda:recipe:: perl-json-validator
   :replaces_section_title:
   :noindex:

   Validate data against a JSON schema

   :homepage: https://github.com/jhthorsen/json-validator
   :license: artistic_2
   :recipe: /`perl-json-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-validator/meta.yaml>`_

   


.. conda:package:: perl-json-validator

   |downloads_perl-json-validator| |docker_perl-json-validator|

   :versions:
      
      

      ``5.14-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-mojolicious: 
   :depends perl-yaml-pp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-validator

   and update with::

      conda update perl-json-validator

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json-validator:<tag>

   (see `perl-json-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-validator| image:: https://img.shields.io/conda/dn/bioconda/perl-json-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-validator
   :alt:   (downloads)
.. |docker_perl-json-validator| image:: https://quay.io/repository/biocontainers/perl-json-validator/status
   :target: https://quay.io/repository/biocontainers/perl-json-validator
.. _`perl-json-validator/tags`: https://quay.io/repository/biocontainers/perl-json-validator?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-validator";
        var versions = ["5.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-validator/README.html