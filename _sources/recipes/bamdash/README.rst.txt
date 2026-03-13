:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamdash'
.. highlight: bash

bamdash
=======

.. conda:recipe:: bamdash
   :replaces_section_title:
   :noindex:

   Aggregate pathogen NGS results into an interactive plot.

   :homepage: https://github.com/jonas-fuchs/BAMdash
   :documentation: https://github.com/jonas-fuchs/BAMdash/blob/v.0.4.5/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bamdash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdash/meta.yaml>`_

   


.. conda:package:: bamdash

   |downloads_bamdash| |docker_bamdash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4-0</code>,  <code>0.3.1-0</code>,  <code>0.3-0</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.79``
   :depends on pandas: ``>=1.4.4``
   :depends on plotly: ``>=5.17.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.9,<3.14``
   :depends on python-kaleido: ``>=0.2.1``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bamdash

to add into an existing workspace instead, run::

    pixi add bamdash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamdash

Alternatively, to install into a new environment, run::

    conda create -n envname bamdash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamdash:<tag>

(see `bamdash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamdash| image:: https://img.shields.io/conda/dn/bioconda/bamdash.svg?style=flat
   :target: https://anaconda.org/bioconda/bamdash
   :alt:   (downloads)
.. |docker_bamdash| image:: https://quay.io/repository/biocontainers/bamdash/status
   :target: https://quay.io/repository/biocontainers/bamdash
.. _`bamdash/tags`: https://quay.io/repository/biocontainers/bamdash?tab=tags


.. raw:: html

    <script>
        var package = "bamdash";
        var versions = ["0.4.5","0.4.4","0.4.3","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamdash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamdash/README.html