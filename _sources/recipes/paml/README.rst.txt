:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paml'
.. highlight: bash

paml
====

.. conda:recipe:: paml
   :replaces_section_title:
   :noindex:

   A package of programs for phylogenetic analyses of DNA or protein sequences using maximum likelihood.

   :homepage: http://abacus.gene.ucl.ac.uk/software/paml.html
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`paml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml/meta.yaml>`_
   :links: biotools: :biotools:`paml`, doi: :doi:`10.1093/bioinformatics/13.5.555`

   


.. conda:package:: paml

   |downloads_paml| |docker_paml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10.6-2</code>,  <code>4.10.6-1</code>,  <code>4.10.6-0</code>,  <code>4.9-7</code>,  <code>4.9-6</code>,  <code>4.9-5</code>,  <code>4.9-4</code>,  <code>4.9-3</code>,  <code>4.9-2</code>,  </span></summary>
      

      ``4.10.6-2``,  ``4.10.6-1``,  ``4.10.6-0``,  ``4.9-7``,  ``4.9-6``,  ``4.9-5``,  ``4.9-4``,  ``4.9-3``,  ``4.9-2``,  ``4.9-1``,  ``4.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install paml

   and update with::

      mamba update paml

  To create a new environment, run::

      mamba create --name myenvname paml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paml:<tag>

   (see `paml/tags`_ for valid values for ``<tag>``)


.. |downloads_paml| image:: https://img.shields.io/conda/dn/bioconda/paml.svg?style=flat
   :target: https://anaconda.org/bioconda/paml
   :alt:   (downloads)
.. |docker_paml| image:: https://quay.io/repository/biocontainers/paml/status
   :target: https://quay.io/repository/biocontainers/paml
.. _`paml/tags`: https://quay.io/repository/biocontainers/paml?tab=tags


.. raw:: html

    <script>
        var package = "paml";
        var versions = ["4.10.6","4.10.6","4.10.6","4.9","4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paml/README.html