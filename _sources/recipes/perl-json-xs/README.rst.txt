:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-xs'
.. highlight: bash

perl-json-xs
============

.. conda:recipe:: perl-json-xs
   :replaces_section_title:
   :noindex:

   JSON serialising\/deserialising\, done correctly and fast

   :homepage: https://metacpan.org/pod/JSON::XS
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-json-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs/meta.yaml>`_

   


.. conda:package:: perl-json-xs

   |downloads_perl-json-xs| |docker_perl-json-xs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.03-3</code>,  <code>4.03-2</code>,  <code>4.03-1</code>,  <code>4.03-0</code>,  <code>4.02-3</code>,  <code>4.02-2</code>,  <code>4.02-1</code>,  <code>4.02-0</code>,  <code>4.0-0</code>,  </span></summary>
      

      ``4.03-3``,  ``4.03-2``,  ``4.03-1``,  ``4.03-0``,  ``4.02-3``,  ``4.02-2``,  ``4.02-1``,  ``4.02-0``,  ``4.0-0``,  ``3.04-0``,  ``2.34-6``,  ``2.34-5``,  ``2.34-4``,  ``2.34-3``,  ``2.34-2``,  ``2.34-1``,  ``2.34-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-common-sense: 
   :depends perl-types-serialiser: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-json-xs

   and update with::

      mamba update perl-json-xs

  To create a new environment, run::

      mamba create --name myenvname perl-json-xs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-json-xs:<tag>

   (see `perl-json-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-json-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-xs
   :alt:   (downloads)
.. |docker_perl-json-xs| image:: https://quay.io/repository/biocontainers/perl-json-xs/status
   :target: https://quay.io/repository/biocontainers/perl-json-xs
.. _`perl-json-xs/tags`: https://quay.io/repository/biocontainers/perl-json-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-xs";
        var versions = ["4.03","4.03","4.03","4.03","4.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-xs/README.html