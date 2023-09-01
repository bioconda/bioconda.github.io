:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqlogo'
.. highlight: bash

seqlogo
=======

.. conda:recipe:: seqlogo
   :replaces_section_title:
   :noindex:

   Python port of the R Bioconductor \`seqlogo\` package

   :homepage: https://github.com/betteridiot/seqlogo
   :license: BSD / BSD
   :recipe: /`seqlogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo/meta.yaml>`_

   


.. conda:package:: seqlogo

   |downloads_seqlogo| |docker_seqlogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.29.8-0</code>,  <code>5.29.7-0</code>,  <code>5.29.6-0</code>,  <code>5.29.5-0</code>,  <code>5.29.4-0</code>,  <code>5.29.1-0</code>,  <code>5.2.9-1</code>,  <code>0.2.0-0</code>,  <code>0.1.13-0</code>,  </span></summary>
      

      ``5.29.8-0``,  ``5.29.7-0``,  ``5.29.6-0``,  ``5.29.5-0``,  ``5.29.4-0``,  ``5.29.1-0``,  ``5.2.9-1``,  ``0.2.0-0``,  ``0.1.13-0``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends ghostscript: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends weblogo: 
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

      mamba install seqlogo

   and update with::

      mamba update seqlogo

  To create a new environment, run::

      mamba create --name myenvname seqlogo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqlogo:<tag>

   (see `seqlogo/tags`_ for valid values for ``<tag>``)


.. |downloads_seqlogo| image:: https://img.shields.io/conda/dn/bioconda/seqlogo.svg?style=flat
   :target: https://anaconda.org/bioconda/seqlogo
   :alt:   (downloads)
.. |docker_seqlogo| image:: https://quay.io/repository/biocontainers/seqlogo/status
   :target: https://quay.io/repository/biocontainers/seqlogo
.. _`seqlogo/tags`: https://quay.io/repository/biocontainers/seqlogo?tab=tags


.. raw:: html

    <script>
        var package = "seqlogo";
        var versions = ["5.29.8","5.29.7","5.29.6","5.29.5","5.29.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlogo/README.html