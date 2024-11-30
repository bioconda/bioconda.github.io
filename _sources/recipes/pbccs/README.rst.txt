:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbccs'
.. highlight: bash

pbccs
=====

.. conda:recipe:: pbccs
   :replaces_section_title:
   :noindex:

   pbccs \- Generate Highly Accurate Single\-Molecule Consensus Reads \(HiFi Reads\)

   :homepage: https://ccs.how
   :license: BSD-3-Clause-Clear
   :recipe: /`pbccs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbccs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbccs/meta.yaml>`_

   


.. conda:package:: pbccs

   |downloads_pbccs| |docker_pbccs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.4.0-0</code>,  <code>6.3.0-0</code>,  <code>6.2.0-0</code>,  <code>6.0.0-2</code>,  <code>6.0.0-1</code>,  <code>6.0.0-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.0-0``,  ``6.0.0-2``,  ``6.0.0-1``,  ``6.0.0-0``,  ``5.0.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install pbccs

   and update with::

      mamba update pbccs

  To create a new environment, run::

      mamba create --name myenvname pbccs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbccs:<tag>

   (see `pbccs/tags`_ for valid values for ``<tag>``)


.. |downloads_pbccs| image:: https://img.shields.io/conda/dn/bioconda/pbccs.svg?style=flat
   :target: https://anaconda.org/bioconda/pbccs
   :alt:   (downloads)
.. |docker_pbccs| image:: https://quay.io/repository/biocontainers/pbccs/status
   :target: https://quay.io/repository/biocontainers/pbccs
.. _`pbccs/tags`: https://quay.io/repository/biocontainers/pbccs?tab=tags


.. raw:: html

    <script>
        var package = "pbccs";
        var versions = ["6.4.0","6.3.0","6.2.0","6.0.0","6.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbccs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbccs/README.html