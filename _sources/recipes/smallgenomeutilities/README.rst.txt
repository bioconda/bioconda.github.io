:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smallgenomeutilities'
.. highlight: bash

smallgenomeutilities
====================

.. conda:recipe:: smallgenomeutilities
   :replaces_section_title:
   :noindex:

   A collection of scripts that are useful for dealing with viral RNA NGS data.

   :homepage: https://github.com/cbg-ethz/smallgenomeutilities
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`smallgenomeutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/meta.yaml>`_

   


.. conda:package:: smallgenomeutilities

   |downloads_smallgenomeutilities| |docker_smallgenomeutilities|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: ``1.83.*``
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on more-itertools: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on progress: 
   :depends on pysam: ``>=0.23``
   :depends on pysamstats: 
   :depends on python: ``>3``
   :depends on pyyaml: 
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install smallgenomeutilities

to add into an existing workspace instead, run::

    pixi add smallgenomeutilities

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smallgenomeutilities

Alternatively, to install into a new environment, run::

    conda create -n envname smallgenomeutilities

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smallgenomeutilities:<tag>

(see `smallgenomeutilities/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smallgenomeutilities| image:: https://img.shields.io/conda/dn/bioconda/smallgenomeutilities.svg?style=flat
   :target: https://anaconda.org/bioconda/smallgenomeutilities
   :alt:   (downloads)
.. |docker_smallgenomeutilities| image:: https://quay.io/repository/biocontainers/smallgenomeutilities/status
   :target: https://quay.io/repository/biocontainers/smallgenomeutilities
.. _`smallgenomeutilities/tags`: https://quay.io/repository/biocontainers/smallgenomeutilities?tab=tags


.. raw:: html

    <script>
        var package = "smallgenomeutilities";
        var versions = ["0.5.2","0.5.1","0.5.0","0.5.0","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smallgenomeutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smallgenomeutilities/README.html