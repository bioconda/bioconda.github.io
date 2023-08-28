:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-parse'
.. highlight: bash

perl-json-parse
===============

.. conda:recipe:: perl-json-parse
   :replaces_section_title:
   :noindex:

   Read JSON into a Perl variable

   :homepage: http://metacpan.org/pod/JSON::Parse
   :license: perl_5
   :recipe: /`perl-json-parse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse/meta.yaml>`_

   


.. conda:package:: perl-json-parse

   |downloads_perl-json-parse| |docker_perl-json-parse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.62-3</code>,  <code>0.62-2</code>,  <code>0.62-1</code>,  <code>0.62-0</code>,  <code>0.61-1</code>,  <code>0.61-0</code>,  <code>0.55-2</code>,  <code>0.55-1</code>,  <code>0.55-0</code>,  </span></summary>
      

      ``0.62-3``,  ``0.62-2``,  ``0.62-1``,  ``0.62-0``,  ``0.61-1``,  ``0.61-0``,  ``0.55-2``,  ``0.55-1``,  ``0.55-0``,  ``0.49-1``,  ``0.49-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-json-parse

   and update with::

      mamba update perl-json-parse

  To create a new environment, run::

      mamba create --name myenvname perl-json-parse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-json-parse:<tag>

   (see `perl-json-parse/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-parse| image:: https://img.shields.io/conda/dn/bioconda/perl-json-parse.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-parse
   :alt:   (downloads)
.. |docker_perl-json-parse| image:: https://quay.io/repository/biocontainers/perl-json-parse/status
   :target: https://quay.io/repository/biocontainers/perl-json-parse
.. _`perl-json-parse/tags`: https://quay.io/repository/biocontainers/perl-json-parse?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-parse";
        var versions = ["0.62","0.62","0.62","0.62","0.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-parse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-parse/README.html