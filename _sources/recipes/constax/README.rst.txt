:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'constax'
.. highlight: bash

constax
=======

.. conda:recipe:: constax
   :replaces_section_title:
   :noindex:

   A software for accurate taxonomic classification of environmental DNA markers

   :homepage: https://github.com/liberjul/CONSTAXv2
   :documentation: https://constax.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`constax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax/meta.yaml>`_

   


.. conda:package:: constax

   |downloads_constax| |docker_constax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.19-0</code>,  <code>2.0.18-0</code>,  <code>2.0.17-0</code>,  <code>2.0.16-0</code>,  <code>2.0.15-0</code>,  <code>2.0.14-0</code>,  <code>2.0.13-0</code>,  <code>2.0.12-0</code>,  <code>2.0.11-0</code>,  </span></summary>
      

      ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.17-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.10-0``,  ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-2``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends rdptools: 
   :depends vsearch: 
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

      mamba install constax

   and update with::

      mamba update constax

  To create a new environment, run::

      mamba create --name myenvname constax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/constax:<tag>

   (see `constax/tags`_ for valid values for ``<tag>``)


.. |downloads_constax| image:: https://img.shields.io/conda/dn/bioconda/constax.svg?style=flat
   :target: https://anaconda.org/bioconda/constax
   :alt:   (downloads)
.. |docker_constax| image:: https://quay.io/repository/biocontainers/constax/status
   :target: https://quay.io/repository/biocontainers/constax
.. _`constax/tags`: https://quay.io/repository/biocontainers/constax?tab=tags


.. raw:: html

    <script>
        var package = "constax";
        var versions = ["2.0.19","2.0.18","2.0.17","2.0.16","2.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/constax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/constax/README.html