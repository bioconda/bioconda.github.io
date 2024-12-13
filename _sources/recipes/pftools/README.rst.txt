:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pftools'
.. highlight: bash

pftools
=======

.. conda:recipe:: pftools
   :replaces_section_title:
   :noindex:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://web.expasy.org/pftools/
   :developer docs: https://github.com/sib-swiss/pftools3
   :license: GPL / GPLv2
   :recipe: /`pftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools/meta.yaml>`_

   


.. conda:package:: pftools

   |downloads_pftools| |docker_pftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.12-5</code>,  <code>3.2.12-4</code>,  <code>3.2.12-3</code>,  <code>3.2.12-2</code>,  <code>3.2.12-1</code>,  <code>3.2.12-0</code>,  <code>3.2.11-2</code>,  <code>3.2.11-1</code>,  <code>3.2.11-0</code>,  </span></summary>
      

      ``3.2.12-5``,  ``3.2.12-4``,  ``3.2.12-3``,  ``3.2.12-2``,  ``3.2.12-1``,  ``3.2.12-0``,  ``3.2.11-2``,  ``3.2.11-1``,  ``3.2.11-0``,  ``3.2.10-0``,  ``2.3.5-1``,  ``2.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pcre2: ``>=10.44,<10.45.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-file-slurp: ``9999.32.*``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends zlib: 
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

      mamba install pftools

   and update with::

      mamba update pftools

  To create a new environment, run::

      mamba create --name myenvname pftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pftools:<tag>

   (see `pftools/tags`_ for valid values for ``<tag>``)


.. |downloads_pftools| image:: https://img.shields.io/conda/dn/bioconda/pftools.svg?style=flat
   :target: https://anaconda.org/bioconda/pftools
   :alt:   (downloads)
.. |docker_pftools| image:: https://quay.io/repository/biocontainers/pftools/status
   :target: https://quay.io/repository/biocontainers/pftools
.. _`pftools/tags`: https://quay.io/repository/biocontainers/pftools?tab=tags


.. raw:: html

    <script>
        var package = "pftools";
        var versions = ["3.2.12","3.2.12","3.2.12","3.2.12","3.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pftools/README.html