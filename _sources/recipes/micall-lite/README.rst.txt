:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micall-lite'
.. highlight: bash

micall-lite
===========

.. conda:recipe:: micall-lite
   :replaces_section_title:
   :noindex:

   A bioinformatic pipeline for mapping of FASTQ data to a set of reference
   sequences to generate consensus sequences\, variant calls and coverage maps.

   :homepage: https://github.com/PoonLab/MiCall-Lite
   :license: GNU Affero General Public License v3.0
   :recipe: /`micall-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite/meta.yaml>`_

   


.. conda:package:: micall-lite

   |downloads_micall-lite| |docker_micall-lite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1rc5-6</code>,  <code>0.1rc5-5</code>,  <code>0.1rc5-4</code>,  <code>0.1rc5-3</code>,  <code>0.1rc5-2</code>,  <code>0.1rc5-1</code>,  <code>0.1rc5-0</code>,  <code>0.1rc4-0</code>,  <code>0.1rc3-0</code>,  </span></summary>
      

      ``0.1rc5-6``,  ``0.1rc5-5``,  ``0.1rc5-4``,  ``0.1rc5-3``,  ``0.1rc5-2``,  ``0.1rc5-1``,  ``0.1rc5-0``,  ``0.1rc4-0``,  ``0.1rc3-0``,  ``0.1rc2-0``,  ``0.1rc-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie2: 
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-levenshtein: 
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install micall-lite

to add into an existing workspace instead, run::

    pixi add micall-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install micall-lite

Alternatively, to install into a new environment, run::

    conda create -n envname micall-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/micall-lite:<tag>

(see `micall-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_micall-lite| image:: https://img.shields.io/conda/dn/bioconda/micall-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/micall-lite
   :alt:   (downloads)
.. |docker_micall-lite| image:: https://quay.io/repository/biocontainers/micall-lite/status
   :target: https://quay.io/repository/biocontainers/micall-lite
.. _`micall-lite/tags`: https://quay.io/repository/biocontainers/micall-lite?tab=tags


.. raw:: html

    <script>
        var package = "micall-lite";
        var versions = ["0.1rc5","0.1rc5","0.1rc5","0.1rc5","0.1rc5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micall-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micall-lite/README.html