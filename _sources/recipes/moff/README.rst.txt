:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moff'
.. highlight: bash

moff
====

.. conda:recipe:: moff
   :replaces_section_title:
   :noindex:

   moFF is an OS independent tool designed to extract apex MS1 intensity using a set of identified MS2 peptides.

   :homepage: https://github.com/compomics/moFF
   :license: Apache 2.0
   :recipe: /`moff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.8b00708`, usegalaxy-eu: :usegalaxy-eu:`proteomics_moff`

   


.. conda:package:: moff

   |downloads_moff| |docker_moff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-5</code>,  <code>2.0.3-4</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.2.1-1</code>,  </span></summary>
      

      ``2.0.3-5``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends brain-isotopic-distribution: 
   :depends mono: 
   :depends numpy: ``>=1.15``
   :depends pandas: ``>=0.23,<1.0.0``
   :depends pymzml: ``>=2.0.6``
   :depends pynumpress: 
   :depends pyteomics: ``>=3.5``
   :depends python: ``>=3.4,<3.7``
   :depends scikit-learn: ``>0.19``
   :depends scipy: ``>=1.1``
   :depends simplejson: ``>=3.16.1``
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

      mamba install moff

   and update with::

      mamba update moff

  To create a new environment, run::

      mamba create --name myenvname moff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moff:<tag>

   (see `moff/tags`_ for valid values for ``<tag>``)


.. |downloads_moff| image:: https://img.shields.io/conda/dn/bioconda/moff.svg?style=flat
   :target: https://anaconda.org/bioconda/moff
   :alt:   (downloads)
.. |docker_moff| image:: https://quay.io/repository/biocontainers/moff/status
   :target: https://quay.io/repository/biocontainers/moff
.. _`moff/tags`: https://quay.io/repository/biocontainers/moff?tab=tags


.. raw:: html

    <script>
        var package = "moff";
        var versions = ["2.0.3","2.0.3","2.0.3","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moff/README.html