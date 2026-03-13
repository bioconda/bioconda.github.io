:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yass'
.. highlight: bash

yass
====

.. conda:recipe:: yass
   :replaces_section_title:
   :noindex:

   YASS is a genomic similarity search tool\, for nucleic \(DNA\/RNA\) sequences in fasta or plain text format.

   :homepage: https://bioinfo.lifl.fr/yass
   :developer docs: https://github.com/laurentnoe/yass
   :license: CeCILL Free Software License
   :recipe: /`yass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass/meta.yaml>`_
   :links: biotools: :biotools:`yass`

   


.. conda:package:: yass

   |downloads_yass| |docker_yass|

   :versions:
      
      

      ``1.16-0``,  ``1.14-6``,  ``1.14-5``,  ``1.14-4``,  ``1.14-3``,  ``1.14-2``,  ``1.14-1``,  ``1.14-0``

      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install yass

to add into an existing workspace instead, run::

    pixi add yass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yass

Alternatively, to install into a new environment, run::

    conda create -n envname yass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yass:<tag>

(see `yass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yass| image:: https://img.shields.io/conda/dn/bioconda/yass.svg?style=flat
   :target: https://anaconda.org/bioconda/yass
   :alt:   (downloads)
.. |docker_yass| image:: https://quay.io/repository/biocontainers/yass/status
   :target: https://quay.io/repository/biocontainers/yass
.. _`yass/tags`: https://quay.io/repository/biocontainers/yass?tab=tags


.. raw:: html

    <script>
        var package = "yass";
        var versions = ["1.16","1.14","1.14","1.14","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yass/README.html