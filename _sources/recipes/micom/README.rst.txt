:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micom'
.. highlight: bash

micom
=====

.. conda:recipe:: micom
   :replaces_section_title:
   :noindex:

   Microbial community modeling based on cobrapy.

   :homepage: https://github.com/micom-dev/micom
   :license: APACHE / Apache-2.0
   :recipe: /`micom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micom/meta.yaml>`_

   


.. conda:package:: micom

   |downloads_micom| |docker_micom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.36.1-0</code>,  <code>0.36.0-0</code>,  <code>0.35.0-0</code>,  <code>0.34.1-0</code>,  <code>0.33.2-0</code>,  <code>0.33.1-0</code>,  <code>0.33.0-0</code>,  <code>0.32.5-0</code>,  <code>0.32.4-0</code>,  </span></summary>
      

      ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.33.2-0``,  ``0.33.1-0``,  ``0.33.0-0``,  ``0.32.5-0``,  ``0.32.4-0``,  ``0.32.2-0``,  ``0.32.0-0``,  ``0.31.4-0``,  ``0.31.3-0``,  ``0.30.5-0``,  ``0.30.4-0``,  ``0.29.6-0``,  ``0.29.5-0``,  ``0.28.0-0``,  ``0.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends cobra: ``>=0.17.1``
   :depends jinja2: ``>=2.10.0``
   :depends osqp: ``>=0.6.2``
   :depends python: ``>=3``
   :depends python-symengine: ``>=0.6.1``
   :depends scikit-learn: ``>=0.22.0``
   :depends scipy: ``>=1.0.0``
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

      mamba install micom

   and update with::

      mamba update micom

  To create a new environment, run::

      mamba create --name myenvname micom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/micom:<tag>

   (see `micom/tags`_ for valid values for ``<tag>``)


.. |downloads_micom| image:: https://img.shields.io/conda/dn/bioconda/micom.svg?style=flat
   :target: https://anaconda.org/bioconda/micom
   :alt:   (downloads)
.. |docker_micom| image:: https://quay.io/repository/biocontainers/micom/status
   :target: https://quay.io/repository/biocontainers/micom
.. _`micom/tags`: https://quay.io/repository/biocontainers/micom?tab=tags


.. raw:: html

    <script>
        var package = "micom";
        var versions = ["0.36.1","0.36.0","0.35.0","0.34.1","0.33.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micom/README.html