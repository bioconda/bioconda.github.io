:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybpiper'
.. highlight: bash

hybpiper
========

.. conda:recipe:: hybpiper
   :replaces_section_title:
   :noindex:

   HybPiper is a suite of Python scripts\/modules for targeted sequence capture.

   :homepage: https://github.com/mossmatters/HybPiper
   :documentation: https://github.com/mossmatters/HybPiper/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hybpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper/meta.yaml>`_

   


.. conda:package:: hybpiper

   |downloads_hybpiper| |docker_hybpiper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.8-0</code>,  </span></summary>
      

      ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``>=38.44``
   :depends on biopython: ``>=1.80``
   :depends on blast: ``>=2.9.0``
   :depends on bwa: ``>=0.7.17``
   :depends on diamond: ``>=2.0.11``
   :depends on exonerate: ``>=2.4.0``
   :depends on mafft: ``>=7.487``
   :depends on matplotlib-base: ``>=3.3.2``
   :depends on numpy: 
   :depends on parallel: ``>=20211022``
   :depends on pebble: ``>=4.6.3``
   :depends on progressbar2: ``>=3.38.0``
   :depends on psutil: ``>=5.9.0``
   :depends on python: 
   :depends on samtools: ``>=1.14``
   :depends on seaborn-base: ``>=0.11.1``
   :depends on spades: ``>=4.0.0``
   :depends on trimmomatic: 

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

    pixi global install hybpiper

to add into an existing workspace instead, run::

    pixi add hybpiper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hybpiper

Alternatively, to install into a new environment, run::

    conda create -n envname hybpiper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hybpiper:<tag>

(see `hybpiper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hybpiper| image:: https://img.shields.io/conda/dn/bioconda/hybpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/hybpiper
   :alt:   (downloads)
.. |docker_hybpiper| image:: https://quay.io/repository/biocontainers/hybpiper/status
   :target: https://quay.io/repository/biocontainers/hybpiper
.. _`hybpiper/tags`: https://quay.io/repository/biocontainers/hybpiper?tab=tags


.. raw:: html

    <script>
        var package = "hybpiper";
        var versions = ["2.3.4","2.3.3","2.3.2","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybpiper/README.html