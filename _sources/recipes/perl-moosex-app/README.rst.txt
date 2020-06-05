:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-app'
.. highlight: bash

perl-moosex-app
===============

.. conda:recipe:: perl-moosex-app
   :replaces_section_title:
   :noindex:

   Write user\-friendly command line apps with even less suffering

   :homepage: http://metacpan.org/pod/MooseX::App
   :license: perl_5
   :recipe: /`perl-moosex-app <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app/meta.yaml>`_

   


.. conda:package:: perl-moosex-app

   |downloads_perl-moosex-app| |docker_perl-moosex-app|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3701-2</code>,  <code>1.3701-1</code>,  <code>1.3701-0</code>,  <code>1.39-3</code>,  <code>1.39-2</code>,  <code>1.39-1</code>,  <code>1.39-0</code>,  <code>1.35-2</code>,  <code>1.35-1</code>,  </span></summary>
      

      ``1.3701-2``,  ``1.3701-1``,  ``1.3701-0``,  ``1.39-3``,  ``1.39-2``,  ``1.39-1``,  ``1.39-0``,  ``1.35-2``,  ``1.35-1``,  ``1.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-config-any: 
   :depends perl-file-homedir: 
   :depends perl-io-interactive: 
   :depends perl-moose: 
   :depends perl-moosex-types-path-class: 
   :depends perl-path-class: 
   :depends perl-pod-elemental: 
   :depends perl-scalar-list-utils: 
   :depends perl-termreadkey: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-app

   and update with::

      conda update perl-moosex-app

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-app:<tag>

   (see `perl-moosex-app/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-app| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-app
   :alt:   (downloads)
.. |docker_perl-moosex-app| image:: https://quay.io/repository/biocontainers/perl-moosex-app/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app
.. _`perl-moosex-app/tags`: https://quay.io/repository/biocontainers/perl-moosex-app?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app/README.html