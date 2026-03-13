:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthofinder'
.. highlight: bash

orthofinder
===========

.. conda:recipe:: orthofinder
   :replaces_section_title:
   :noindex:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/OrthoFinder/OrthoFinder
   :documentation: https://orthofinder.github.io/OrthoFinder
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`orthofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder/meta.yaml>`_

   


.. conda:package:: orthofinder

   |downloads_orthofinder| |docker_orthofinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-1</code>,  <code>3.1.3-0</code>,  <code>3.1.2-1</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.1b1-0</code>,  <code>2.5.5-2</code>,  </span></summary>
      

      ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.1b1-0``,  ``2.5.5-2``,  ``2.5.5-1``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.12-0``,  ``2.3.11-1``,  ``2.3.11-0``,  ``2.3.10-0``,  ``2.3.8-2``,  ``2.3.8-1``,  ``2.3.8-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.4-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aster: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bzip2: 
   :depends on diamond: ``<2.2|>=2.1.7``
   :depends on ete4: 
   :depends on famsa: 
   :depends on fastme: 
   :depends on fasttree: 
   :depends on iqtree: 
   :depends on mafft: 
   :depends on mcl: 
   :depends on mmseqs2: 
   :depends on muscle: 
   :depends on numpy: 
   :depends on python: ``>=3.11,<=3.14``
   :depends on raxml: 
   :depends on raxml-ng: 
   :depends on rich: 
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

    pixi global install orthofinder

to add into an existing workspace instead, run::

    pixi add orthofinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthofinder

Alternatively, to install into a new environment, run::

    conda create -n envname orthofinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthofinder:<tag>

(see `orthofinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthofinder| image:: https://img.shields.io/conda/dn/bioconda/orthofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/orthofinder
   :alt:   (downloads)
.. |docker_orthofinder| image:: https://quay.io/repository/biocontainers/orthofinder/status
   :target: https://quay.io/repository/biocontainers/orthofinder
.. _`orthofinder/tags`: https://quay.io/repository/biocontainers/orthofinder?tab=tags


.. raw:: html

    <script>
        var package = "orthofinder";
        var versions = ["3.1.3","3.1.3","3.1.2","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthofinder/README.html