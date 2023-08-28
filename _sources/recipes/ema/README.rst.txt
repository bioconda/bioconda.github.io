:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ema'
.. highlight: bash

ema
===

.. conda:recipe:: ema
   :replaces_section_title:
   :noindex:

   Fast \& accurate alignment of barcoded short\-reads

   :homepage: http://ema.csail.mit.edu/
   :documentation: https://github.com/arshajii/ema#usage
   
   :developer docs: https://github.com/arshajii/ema
   :license: MIT
   :recipe: /`ema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ema/meta.yaml>`_
   :links: doi: :doi:`10.1101/220236`

   


.. conda:package:: ema

   |downloads_ema| |docker_ema|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.2-6</code>,  <code>0.6.2-5</code>,  <code>0.6.2-4</code>,  <code>0.6.2-3</code>,  <code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>v0.6.2-1</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.2-6``,  ``0.6.2-5``,  ``0.6.2-4``,  ``0.6.2-3``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``v0.6.2-1``,  ``v0.6.1-1``,  ``v0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install ema

   and update with::

      mamba update ema

  To create a new environment, run::

      mamba create --name myenvname ema

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ema:<tag>

   (see `ema/tags`_ for valid values for ``<tag>``)


.. |downloads_ema| image:: https://img.shields.io/conda/dn/bioconda/ema.svg?style=flat
   :target: https://anaconda.org/bioconda/ema
   :alt:   (downloads)
.. |docker_ema| image:: https://quay.io/repository/biocontainers/ema/status
   :target: https://quay.io/repository/biocontainers/ema
.. _`ema/tags`: https://quay.io/repository/biocontainers/ema?tab=tags


.. raw:: html

    <script>
        var package = "ema";
        var versions = ["0.7.0","0.6.2","0.6.2","0.6.2","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ema/README.html