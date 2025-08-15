:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-date-manip'
.. highlight: bash

perl-date-manip
===============

.. conda:recipe:: perl-date-manip
   :replaces_section_title:
   :noindex:

   Date manipulation routines.

   :homepage: https://metacpan.org/pod/Date::Manip
   :license: Perl_5
   :recipe: /`perl-date-manip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-manip/meta.yaml>`_

   


.. conda:package:: perl-date-manip

   |downloads_perl-date-manip| |docker_perl-date-manip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.98-0</code>,  <code>6.88-0</code>,  <code>6.86-0</code>,  <code>6.76-1</code>,  <code>6.76-0</code>,  <code>6.75-0</code>,  <code>6.73-0</code>,  <code>6.72-0</code>,  <code>6.57-1</code>,  </span></summary>
      

      ``6.98-0``,  ``6.88-0``,  ``6.86-0``,  ``6.76-1``,  ``6.76-0``,  ``6.75-0``,  ``6.73-0``,  ``6.72-0``,  ``6.57-1``,  ``6.57-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-storable: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-date-manip

   and update with::

      mamba update perl-date-manip

  To create a new environment, run::

      mamba create --name myenvname perl-date-manip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-date-manip:<tag>

   (see `perl-date-manip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-date-manip| image:: https://img.shields.io/conda/dn/bioconda/perl-date-manip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-date-manip
   :alt:   (downloads)
.. |docker_perl-date-manip| image:: https://quay.io/repository/biocontainers/perl-date-manip/status
   :target: https://quay.io/repository/biocontainers/perl-date-manip
.. _`perl-date-manip/tags`: https://quay.io/repository/biocontainers/perl-date-manip?tab=tags


.. raw:: html

    <script>
        var package = "perl-date-manip";
        var versions = ["6.98","6.88","6.86","6.76","6.76"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-date-manip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-date-manip/README.html