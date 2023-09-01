:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qax'
.. highlight: bash

qax
===

.. conda:recipe:: qax
   :replaces_section_title:
   :noindex:

   Extract data\, metadata\, bibliography and provenance from Qiime2 artifacts

   :homepage: https://github.com/telatin/qax
   :license: GPL-3.0-only
   :recipe: /`qax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qax/meta.yaml>`_

   


.. conda:package:: qax

   |downloads_qax| |docker_qax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.6-2</code>,  <code>0.9.6-1</code>,  <code>0.9.6-0</code>,  <code>0.9.5-1</code>,  <code>0.9.5-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.6.0-1</code>,  </span></summary>
      

      ``0.9.6-2``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzip: ``>=1.9.2,<2.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zip: 
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

      mamba install qax

   and update with::

      mamba update qax

  To create a new environment, run::

      mamba create --name myenvname qax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qax:<tag>

   (see `qax/tags`_ for valid values for ``<tag>``)


.. |downloads_qax| image:: https://img.shields.io/conda/dn/bioconda/qax.svg?style=flat
   :target: https://anaconda.org/bioconda/qax
   :alt:   (downloads)
.. |docker_qax| image:: https://quay.io/repository/biocontainers/qax/status
   :target: https://quay.io/repository/biocontainers/qax
.. _`qax/tags`: https://quay.io/repository/biocontainers/qax?tab=tags


.. raw:: html

    <script>
        var package = "qax";
        var versions = ["0.9.6","0.9.6","0.9.6","0.9.5","0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qax/README.html