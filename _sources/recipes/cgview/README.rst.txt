:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgview'
.. highlight: bash

cgview
======

.. conda:recipe:: cgview
   :replaces_section_title:
   :noindex:

   CGView is a Java package for generating high quality\, zoomable maps of circular genomes.
   Its primary purpose is to serve as a component of sequence annotation pipelines\, as a
   means of generating visual output suitable for the web.

   :homepage: http://wishart.biology.ualberta.ca/cgview/
   :license: GNU General Public License, Version 2.0
   :recipe: /`cgview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview/meta.yaml>`_

   


.. conda:package:: cgview

   |downloads_cgview| |docker_cgview|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends on openjdk: ``>=6``
   :depends on perl: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on python: 

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

    pixi global install cgview

to add into an existing workspace instead, run::

    pixi add cgview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgview

Alternatively, to install into a new environment, run::

    conda create -n envname cgview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgview:<tag>

(see `cgview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgview| image:: https://img.shields.io/conda/dn/bioconda/cgview.svg?style=flat
   :target: https://anaconda.org/bioconda/cgview
   :alt:   (downloads)
.. |docker_cgview| image:: https://quay.io/repository/biocontainers/cgview/status
   :target: https://quay.io/repository/biocontainers/cgview
.. _`cgview/tags`: https://quay.io/repository/biocontainers/cgview?tab=tags


.. raw:: html

    <script>
        var package = "cgview";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgview/README.html