:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pkiss'
.. highlight: bash

pkiss
=====

.. conda:recipe:: pkiss
   :replaces_section_title:
   :noindex:

   RNA secondary structure prediction including K\-type and kissing hairpin\- pseudoknots.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/pkiss
   :license: GPL-3.0-or-later
   :recipe: /`pkiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-15294-8_5`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: pkiss

   |downloads_pkiss| |docker_pkiss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.14-3</code>,  <code>2.2.14-2</code>,  <code>2.2.14-1</code>,  <code>2.2.14-0</code>,  <code>2.2.12-5</code>,  <code>2.2.12-4</code>,  <code>2.2.12-3</code>,  <code>2.2.12-1</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.14-3``,  ``2.2.14-2``,  ``2.2.14-1``,  ``2.2.14-0``,  ``2.2.12-5``,  ``2.2.12-4``,  ``2.2.12-3``,  ``2.2.12-1``,  ``2.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install pkiss

   and update with::

      mamba update pkiss

  To create a new environment, run::

      mamba create --name myenvname pkiss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pkiss:<tag>

   (see `pkiss/tags`_ for valid values for ``<tag>``)


.. |downloads_pkiss| image:: https://img.shields.io/conda/dn/bioconda/pkiss.svg?style=flat
   :target: https://anaconda.org/bioconda/pkiss
   :alt:   (downloads)
.. |docker_pkiss| image:: https://quay.io/repository/biocontainers/pkiss/status
   :target: https://quay.io/repository/biocontainers/pkiss
.. _`pkiss/tags`: https://quay.io/repository/biocontainers/pkiss?tab=tags


.. raw:: html

    <script>
        var package = "pkiss";
        var versions = ["2.3.0","2.2.14","2.2.14","2.2.14","2.2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pkiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pkiss/README.html