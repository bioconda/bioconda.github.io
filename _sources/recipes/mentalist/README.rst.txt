:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mentalist'
.. highlight: bash

mentalist
=========

.. conda:recipe:: mentalist
   :replaces_section_title:
   :noindex:

   The MLST pipeline developed by the PathOGiST research group.

   :homepage: https://github.com/WGS-TB/MentaLiST
   :license: MIT
   :recipe: /`mentalist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist/meta.yaml>`_

   


.. conda:package:: mentalist

   |downloads_mentalist| |docker_mentalist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-8</code>,  <code>0.2.4-7</code>,  <code>0.2.4-6</code>,  <code>0.2.4-5</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.2.4-8``,  ``0.2.4-7``,  ``0.2.4-6``,  ``0.2.4-5``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9-7``,  ``0.1.9-6``,  ``0.1.9-5``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.8-2``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.6-0``,  ``0.1.5-3``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-0``,  ``0.1.3-3``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``1.10.1.*``
   :depends julia: ``0.5.2.*``
   :depends libgcc: ``>=13``
   :depends libxml2: 
   :depends mpfr: ``3.1.5.*``
   :depends unzip: 
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

      mamba install mentalist

   and update with::

      mamba update mentalist

  To create a new environment, run::

      mamba create --name myenvname mentalist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mentalist:<tag>

   (see `mentalist/tags`_ for valid values for ``<tag>``)


.. |downloads_mentalist| image:: https://img.shields.io/conda/dn/bioconda/mentalist.svg?style=flat
   :target: https://anaconda.org/bioconda/mentalist
   :alt:   (downloads)
.. |docker_mentalist| image:: https://quay.io/repository/biocontainers/mentalist/status
   :target: https://quay.io/repository/biocontainers/mentalist
.. _`mentalist/tags`: https://quay.io/repository/biocontainers/mentalist?tab=tags


.. raw:: html

    <script>
        var package = "mentalist";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mentalist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mentalist/README.html