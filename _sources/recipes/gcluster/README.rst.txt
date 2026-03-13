:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcluster'
.. highlight: bash

gcluster
========

.. conda:recipe:: gcluster
   :replaces_section_title:
   :noindex:

   Gcluster is a simple\-to\-use tool for visualizing and comparing genome contexts for numerous genomes.

   :homepage: https://www.microbialgenomic.cn/Gcluster_tool.html
   :documentation: https://github.com/Xiangyang1984/Gcluster
   
   :license: GNU General Public License v3.0 or any later version (GPL-3.0-or-later)
   :recipe: /`gcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster/meta.yaml>`_

   Gcluster is a stand\-alone Perl application\, which requires MCL\, NCBI BLAST\+ and several Perl Modules \(GD\, GD\:\:SVG\) to be installed before use.


.. conda:package:: gcluster

   |downloads_gcluster| |docker_gcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.06-2</code>,  <code>2.06-0</code>,  <code>2.0.7-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  </span></summary>
      

      ``2.06-2``,  ``2.06-0``,  ``2.0.7-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on mcl: 
   :depends on perl-bioperl-core: 
   :depends on perl-gd: 
   :depends on perl-gd-svg: 
   :depends on perl-svg: 

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

    pixi global install gcluster

to add into an existing workspace instead, run::

    pixi add gcluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gcluster

Alternatively, to install into a new environment, run::

    conda create -n envname gcluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gcluster:<tag>

(see `gcluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gcluster| image:: https://img.shields.io/conda/dn/bioconda/gcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/gcluster
   :alt:   (downloads)
.. |docker_gcluster| image:: https://quay.io/repository/biocontainers/gcluster/status
   :target: https://quay.io/repository/biocontainers/gcluster
.. _`gcluster/tags`: https://quay.io/repository/biocontainers/gcluster?tab=tags


.. raw:: html

    <script>
        var package = "gcluster";
        var versions = ["2.06","2.06","2.0.7","2.0.5","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcluster/README.html