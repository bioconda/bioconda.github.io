:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-template-toolkit'
.. highlight: bash

perl-template-toolkit
=====================

.. conda:recipe:: perl-template-toolkit
   :replaces_section_title:
   :noindex:

   Comprehensive template processing system.

   :homepage: https://metacpan.org/pod/Template::Toolkit
   :license: perl_5
   :recipe: /`perl-template-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-template-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-template-toolkit/meta.yaml>`_

   


.. conda:package:: perl-template-toolkit

   |downloads_perl-template-toolkit| |docker_perl-template-toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.102-1</code>,  <code>3.102-0</code>,  <code>3.100-3</code>,  <code>3.100-2</code>,  <code>3.100-1</code>,  <code>3.100-0</code>,  <code>3.010-1</code>,  <code>3.010-0</code>,  <code>2.26-2</code>,  </span></summary>
      

      ``3.102-1``,  ``3.102-0``,  ``3.100-3``,  ``3.100-2``,  ``3.100-1``,  ``3.100-0``,  ``3.010-1``,  ``3.010-0``,  ``2.26-2``,  ``2.26-1``,  ``2.26-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-appconfig: 
   :depends perl-image-info: 
   :depends perl-image-size: 
   :depends perl-test-leaktrace: ``0.17.*``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-template-toolkit

   and update with::

      mamba update perl-template-toolkit

  To create a new environment, run::

      mamba create --name myenvname perl-template-toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-template-toolkit:<tag>

   (see `perl-template-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-template-toolkit| image:: https://img.shields.io/conda/dn/bioconda/perl-template-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-template-toolkit
   :alt:   (downloads)
.. |docker_perl-template-toolkit| image:: https://quay.io/repository/biocontainers/perl-template-toolkit/status
   :target: https://quay.io/repository/biocontainers/perl-template-toolkit
.. _`perl-template-toolkit/tags`: https://quay.io/repository/biocontainers/perl-template-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "perl-template-toolkit";
        var versions = ["3.102","3.102","3.100","3.100","3.100"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-template-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-template-toolkit/README.html