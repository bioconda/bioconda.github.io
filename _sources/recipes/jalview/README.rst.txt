:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jalview'
.. highlight: bash

jalview
=======

.. conda:recipe:: jalview
   :replaces_section_title:
   :noindex:

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.

   :homepage: https://www.jalview.org/
   :license: GPL-3.0-only
   :recipe: /`jalview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview/meta.yaml>`_

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.
   Use it to view and edit sequence alignments\, analyse them with phylogenetic trees and principal
   components analysis \(PCA\) plots and explore molecular structures and annotation. It is also able
   to import and annotate DNA and Protein products from VCF files and retrieve data and annotation from
   3D\-Beacons\, Uniprot\, Ensembl\, ENA\, Rfam\, Pfam and the PDBe.



.. conda:package:: jalview

   |downloads_jalview| |docker_jalview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.5.1-0</code>,  <code>2.11.5.0-0</code>,  <code>2.11.4.1-0</code>,  <code>2.11.4.0-0</code>,  <code>2.11.3.3-0</code>,  <code>2.11.3.2-0</code>,  <code>2.11.3.1-0</code>,  <code>2.11.3.0-0</code>,  <code>2.11.2.7-0</code>,  </span></summary>
      

      ``2.11.5.1-0``,  ``2.11.5.0-0``,  ``2.11.4.1-0``,  ``2.11.4.0-0``,  ``2.11.3.3-0``,  ``2.11.3.2-0``,  ``2.11.3.1-0``,  ``2.11.3.0-0``,  ``2.11.2.7-0``,  ``2.11.2.6-0``,  ``2.11.2.4-0``,  ``2.11.2.3-0``,  ``2.11.2.1-0``,  ``2.11.1.5-0``,  ``2.11.1.4-2``,  ``2.11.1.4-1``,  ``2.11.1.4-0``,  ``2.11.1.3-0``,  ``2.11.1.2-0``,  ``2.11.1.0-1``,  ``2.11.1.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.5-3``,  ``2.10.4-0``,  ``2.10.4b1-2``,  ``2.10.4b1-0``,  ``2.10.3-1``,  ``2.10.3-0``,  ``2.10.3b1-0``,  ``2.10.2b2-2``,  ``2.10.2b2-1``,  ``2.10.2b2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8.0.192,!=9.*,!=10.*,!=11.0.9.*,<12``
   :depends on psutil: 
   :depends on xorg-libxtst: 

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

    pixi global install jalview

to add into an existing workspace instead, run::

    pixi add jalview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jalview

Alternatively, to install into a new environment, run::

    conda create -n envname jalview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jalview:<tag>

(see `jalview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jalview| image:: https://img.shields.io/conda/dn/bioconda/jalview.svg?style=flat
   :target: https://anaconda.org/bioconda/jalview
   :alt:   (downloads)
.. |docker_jalview| image:: https://quay.io/repository/biocontainers/jalview/status
   :target: https://quay.io/repository/biocontainers/jalview
.. _`jalview/tags`: https://quay.io/repository/biocontainers/jalview?tab=tags


.. raw:: html

    <script>
        var package = "jalview";
        var versions = ["2.11.5.1","2.11.5.0","2.11.4.1","2.11.4.0","2.11.3.3"];
    </script>





Notes
-----
This wrapper and installation is primarily for commandline use.
Set JALVIEW\_JRE\=j1.8 or JALVIEW\_JRE\=j11 to specify the java runtime if you need jalview to start up as quickly as possible
Set JALVIEW\_MAXMEM\=2g to restrict jalviews maximal memory consumption \(here to 2G RAM\). Otherwise 90\% of physical memory
\(capped at 32G\) is allocated.  Memory allocation can also be set in Tools\-\>Preferences\-\>Startup or specified with command\-
line arguments \-\-jvmmempc\=90 \(percentage of total physical memory\, default 90\) and \-\-jvmmemmax\=2g \(set a different cap\,
default 32G if total physical memory can be detected or 8G if total physical memory cannot be detected\).


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jalview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jalview/README.html