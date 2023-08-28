:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kissplice'
.. highlight: bash

kissplice
=========

.. conda:recipe:: kissplice
   :replaces_section_title:
   :noindex:

   A local transcriptome assembler for SNPs\, indels and AS events

   :homepage: http://kissplice.prabi.fr
   :license: CeCILL license
   :recipe: /`kissplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice/meta.yaml>`_

   


.. conda:package:: kissplice

   |downloads_kissplice| |docker_kissplice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.5-2</code>,  <code>2.5.5-1</code>,  <code>2.5.5-0</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.4.0p1-3</code>,  <code>2.4.0p1-2</code>,  </span></summary>
      

      ``2.5.5-2``,  ``2.5.5-1``,  ``2.5.5-0``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.4.0p1-3``,  ``2.4.0p1-2``,  ``2.4.0p1-1``,  ``2.4.0p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3``
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

      mamba install kissplice

   and update with::

      mamba update kissplice

  To create a new environment, run::

      mamba create --name myenvname kissplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kissplice:<tag>

   (see `kissplice/tags`_ for valid values for ``<tag>``)


.. |downloads_kissplice| image:: https://img.shields.io/conda/dn/bioconda/kissplice.svg?style=flat
   :target: https://anaconda.org/bioconda/kissplice
   :alt:   (downloads)
.. |docker_kissplice| image:: https://quay.io/repository/biocontainers/kissplice/status
   :target: https://quay.io/repository/biocontainers/kissplice
.. _`kissplice/tags`: https://quay.io/repository/biocontainers/kissplice?tab=tags


.. raw:: html

    <script>
        var package = "kissplice";
        var versions = ["2.5.5","2.5.5","2.5.5","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kissplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kissplice/README.html