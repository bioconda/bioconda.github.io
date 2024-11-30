:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoove'
.. highlight: bash

smoove
======

.. conda:recipe:: smoove
   :replaces_section_title:
   :noindex:

   structural variant calling and genotyping with existing tools\, but\, smoothly

   :homepage: https://github.com/brentp/smoove
   :license: Apache / Apache-2.0
   :recipe: /`smoove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove/meta.yaml>`_

   


.. conda:package:: smoove

   |downloads_smoove| |docker_smoove|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.8-1</code>,  <code>0.2.8-0</code>,  <code>0.2.7-0</code>,  <code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.1.9-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends duphold: 
   :depends gsort: 
   :depends htslib: 
   :depends lumpy-sv: ``>=0.3``
   :depends mosdepth: 
   :depends samtools: 
   :depends svtools: 
   :depends svtyper: 
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

      mamba install smoove

   and update with::

      mamba update smoove

  To create a new environment, run::

      mamba create --name myenvname smoove

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smoove:<tag>

   (see `smoove/tags`_ for valid values for ``<tag>``)


.. |downloads_smoove| image:: https://img.shields.io/conda/dn/bioconda/smoove.svg?style=flat
   :target: https://anaconda.org/bioconda/smoove
   :alt:   (downloads)
.. |docker_smoove| image:: https://quay.io/repository/biocontainers/smoove/status
   :target: https://quay.io/repository/biocontainers/smoove
.. _`smoove/tags`: https://quay.io/repository/biocontainers/smoove?tab=tags


.. raw:: html

    <script>
        var package = "smoove";
        var versions = ["0.2.8","0.2.8","0.2.7","0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoove/README.html