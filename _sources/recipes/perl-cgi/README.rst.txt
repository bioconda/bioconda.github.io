:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cgi'
.. highlight: bash

perl-cgi
========

.. conda:recipe:: perl-cgi
   :replaces_section_title:
   :noindex:

   A generic file fetching mechanism.

   :homepage: https://metacpan.org/pod/distribution/CGI/lib/CGI.pod
   :license: GPL
   :recipe: /`perl-cgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi/meta.yaml>`_

   


.. conda:package:: perl-cgi

   |downloads_perl-cgi| |docker_perl-cgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.70-0</code>,  <code>4.69-0</code>,  <code>4.67-2</code>,  <code>4.67-1</code>,  <code>4.67-0</code>,  <code>4.56-2</code>,  <code>4.56-1</code>,  <code>4.56-0</code>,  <code>4.55-0</code>,  </span></summary>
      

      ``4.70-0``,  ``4.69-0``,  ``4.67-2``,  ``4.67-1``,  ``4.67-0``,  ``4.56-2``,  ``4.56-1``,  ``4.56-0``,  ``4.55-0``,  ``4.54-1``,  ``4.54-0``,  ``4.44-2``,  ``4.44-1``,  ``4.44-0``,  ``4.43-0``,  ``4.40-2``,  ``4.40-1``,  ``4.40-0``,  ``4.22-4``,  ``4.22-3``,  ``4.22-2``,  ``4.22-1``,  ``4.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-file-temp: 
   :depends perl-html-parser: ``>=3.83,<4.0a0``
   :depends perl-parent: 
   :depends perl-test-nowarnings: ``1.06.*``
   :depends perl-uri: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-cgi

   and update with::

      mamba update perl-cgi

  To create a new environment, run::

      mamba create --name myenvname perl-cgi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cgi:<tag>

   (see `perl-cgi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cgi| image:: https://img.shields.io/conda/dn/bioconda/perl-cgi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cgi
   :alt:   (downloads)
.. |docker_perl-cgi| image:: https://quay.io/repository/biocontainers/perl-cgi/status
   :target: https://quay.io/repository/biocontainers/perl-cgi
.. _`perl-cgi/tags`: https://quay.io/repository/biocontainers/perl-cgi?tab=tags


.. raw:: html

    <script>
        var package = "perl-cgi";
        var versions = ["4.70","4.69","4.67","4.67","4.67"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cgi/README.html