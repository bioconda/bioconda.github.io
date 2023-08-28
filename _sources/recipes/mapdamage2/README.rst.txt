:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapdamage2'
.. highlight: bash

mapdamage2
==========

.. conda:recipe:: mapdamage2
   :replaces_section_title:
   :noindex:

   mapDamage\: tracking and quantifying damage patterns in ancient DNA sequences http\:\/\/geogenetics.ku.dk\/all\_literature\/mapdamage\/

   :homepage: https://github.com/ginolhac/mapDamage
   :license: MIT
   :recipe: /`mapdamage2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdamage2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdamage2/meta.yaml>`_

   


.. conda:package:: mapdamage2

   |downloads_mapdamage2| |docker_mapdamage2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.6-2</code>,  </span></summary>
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-2``,  ``2.0.6-1``,  ``2.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gam: 
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-inline: 
   :depends r-rcpp: 
   :depends r-rcppgsl: 
   :depends seqtk: 
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

      mamba install mapdamage2

   and update with::

      mamba update mapdamage2

  To create a new environment, run::

      mamba create --name myenvname mapdamage2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapdamage2:<tag>

   (see `mapdamage2/tags`_ for valid values for ``<tag>``)


.. |downloads_mapdamage2| image:: https://img.shields.io/conda/dn/bioconda/mapdamage2.svg?style=flat
   :target: https://anaconda.org/bioconda/mapdamage2
   :alt:   (downloads)
.. |docker_mapdamage2| image:: https://quay.io/repository/biocontainers/mapdamage2/status
   :target: https://quay.io/repository/biocontainers/mapdamage2
.. _`mapdamage2/tags`: https://quay.io/repository/biocontainers/mapdamage2?tab=tags


.. raw:: html

    <script>
        var package = "mapdamage2";
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdamage2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdamage2/README.html