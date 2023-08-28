:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer'
.. highlight: bash

mummer
======

.. conda:recipe:: mummer
   :replaces_section_title:
   :noindex:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: http://mummer.sourceforge.net/
   :license: The Artistic License
   :recipe: /`mummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer/meta.yaml>`_
   :links: biotools: :biotools:`mummer`

   


.. conda:package:: mummer

   |downloads_mummer| |docker_mummer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.23-16</code>,  <code>3.23-15</code>,  <code>3.23-14</code>,  <code>3.23-13</code>,  <code>3.23-12</code>,  <code>3.23-11</code>,  <code>3.23-10</code>,  <code>3.23-9</code>,  <code>3.23-8</code>,  </span></summary>
      

      ``3.23-16``,  ``3.23-15``,  ``3.23-14``,  ``3.23-13``,  ``3.23-12``,  ``3.23-11``,  ``3.23-10``,  ``3.23-9``,  ``3.23-8``,  ``3.23-7``,  ``3.23-6``,  ``3.23-5``,  ``3.23-4``,  ``3.23-3``,  ``3.23-2``,  ``3.23-1``,  ``3.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install mummer

   and update with::

      mamba update mummer

  To create a new environment, run::

      mamba create --name myenvname mummer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mummer:<tag>

   (see `mummer/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer| image:: https://img.shields.io/conda/dn/bioconda/mummer.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer
   :alt:   (downloads)
.. |docker_mummer| image:: https://quay.io/repository/biocontainers/mummer/status
   :target: https://quay.io/repository/biocontainers/mummer
.. _`mummer/tags`: https://quay.io/repository/biocontainers/mummer?tab=tags


.. raw:: html

    <script>
        var package = "mummer";
        var versions = ["3.23","3.23","3.23","3.23","3.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer/README.html