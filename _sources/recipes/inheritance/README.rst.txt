:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inheritance'
.. highlight: bash

inheritance
===========

.. conda:recipe:: inheritance
   :replaces_section_title:
   :noindex:

   inheritance models for mendelian diseases

   :homepage: https://github.com/brentp/inheritance
   :license: MIT
   :recipe: /`inheritance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inheritance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inheritance/meta.yaml>`_

   


.. conda:package:: inheritance

   |downloads_inheritance| |docker_inheritance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.5-1</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.0.9-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install inheritance

   and update with::

      mamba update inheritance

  To create a new environment, run::

      mamba create --name myenvname inheritance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/inheritance:<tag>

   (see `inheritance/tags`_ for valid values for ``<tag>``)


.. |downloads_inheritance| image:: https://img.shields.io/conda/dn/bioconda/inheritance.svg?style=flat
   :target: https://anaconda.org/bioconda/inheritance
   :alt:   (downloads)
.. |docker_inheritance| image:: https://quay.io/repository/biocontainers/inheritance/status
   :target: https://quay.io/repository/biocontainers/inheritance
.. _`inheritance/tags`: https://quay.io/repository/biocontainers/inheritance?tab=tags


.. raw:: html

    <script>
        var package = "inheritance";
        var versions = ["0.1.5","0.1.5","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inheritance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inheritance/README.html