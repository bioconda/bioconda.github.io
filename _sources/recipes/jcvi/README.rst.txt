:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcvi'
.. highlight: bash

jcvi
====

.. conda:recipe:: jcvi
   :replaces_section_title:
   :noindex:

   Python utility libraries on genome assembly\, annotation\, and comparative genomics.

   :homepage: https://github.com/tanghaibao/jcvi
   :documentation: https://github.com/tanghaibao/jcvi/wiki
   
   :license: BSD / BSD-2-Clause
   :recipe: /`jcvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi/meta.yaml>`_
   :links: doi: :doi:`10.1002/imt2.211`

   JCVI utility libraries


.. conda:package:: jcvi

   |downloads_jcvi| |docker_jcvi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.7-0</code>,  <code>1.5.6-0</code>,  <code>1.5.4-0</code>,  <code>1.4.16-0</code>,  <code>1.4.15-1</code>,  <code>1.4.15-0</code>,  <code>1.4.11-0</code>,  <code>1.4.10-0</code>,  <code>1.4.9-0</code>,  </span></summary>
      

      ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.4-0``,  ``1.4.16-0``,  ``1.4.15-1``,  ``1.4.15-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.6-0``,  ``1.3.5-1``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.2.7-3``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.1.19-1``,  ``1.1.19-0``,  ``1.1.18-0``,  ``1.1.17-2``,  ``1.1.17-1``,  ``1.1.17-0``,  ``1.1.16-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.11-1``,  ``1.1.11-0``,  ``1.1.10-1``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.14-0``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.6-0``,  ``0.8.12-1``,  ``0.8.12-0``,  ``0.8.4-1``,  ``0.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends boto3: 
   :depends brewer2mpl: 
   :depends crossmap: 
   :depends deap: 
   :depends ete3: 
   :depends ftpretty: 
   :depends gffutils: 
   :depends goatools: 
   :depends imagemagick: 
   :depends jinja2: 
   :depends last: 
   :depends libgcc: ``>=13``
   :depends libmagic: 
   :depends matplotlib-base: 
   :depends more-itertools: 
   :depends natsort: 
   :depends networkx: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pybedtools: 
   :depends pyefd: 
   :depends pypdf: 
   :depends pytesseract: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-graphviz: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-ggplot2: 
   :depends r-tinytex: 
   :depends rich: 
   :depends scikit-image: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends ucsc-liftover: 
   :depends wand: 
   :depends webcolors: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jcvi

   and update with::

      mamba update jcvi

  To create a new environment, run::

      mamba create --name myenvname jcvi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jcvi:<tag>

   (see `jcvi/tags`_ for valid values for ``<tag>``)


.. |downloads_jcvi| image:: https://img.shields.io/conda/dn/bioconda/jcvi.svg?style=flat
   :target: https://anaconda.org/bioconda/jcvi
   :alt:   (downloads)
.. |docker_jcvi| image:: https://quay.io/repository/biocontainers/jcvi/status
   :target: https://quay.io/repository/biocontainers/jcvi
.. _`jcvi/tags`: https://quay.io/repository/biocontainers/jcvi?tab=tags


.. raw:: html

    <script>
        var package = "jcvi";
        var versions = ["1.5.7","1.5.6","1.5.4","1.4.16","1.4.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcvi/README.html