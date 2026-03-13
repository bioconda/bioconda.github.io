:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratt'
.. highlight: bash

ratt
====

.. conda:recipe:: ratt
   :replaces_section_title:
   :noindex:

   Rapid Annotation Transfer Tool

   :homepage: http://ratt.sourceforge.net
   :developer docs: https://github.com/ThomasDOtto/ratt
   :license: GPL3
   :recipe: /`ratt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt/meta.yaml>`_

   RATT is software to transfer annotation from a reference \(annotated\) genome to an unannotated query genome. It was first developed to transfer annotations between different genome assembly versions. However\, it can also transfer annotations between strains and even different species\, like Plasmodium chabaudi onto P. berghei\, between different Leishmania species or Salmonella enterica onto other Salmonella serotypes. RATT is able to transfer any entries present on a reference sequence\, such as the systematic id or an annotator\'s notes\; such information would be lost in a de novo annotation. 


.. conda:package:: ratt

   |downloads_ratt| |docker_ratt|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.3-0``

      

   
   :depends on mummer: 
   :depends on perl: 

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

    pixi global install ratt

to add into an existing workspace instead, run::

    pixi add ratt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ratt

Alternatively, to install into a new environment, run::

    conda create -n envname ratt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ratt:<tag>

(see `ratt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ratt| image:: https://img.shields.io/conda/dn/bioconda/ratt.svg?style=flat
   :target: https://anaconda.org/bioconda/ratt
   :alt:   (downloads)
.. |docker_ratt| image:: https://quay.io/repository/biocontainers/ratt/status
   :target: https://quay.io/repository/biocontainers/ratt
.. _`ratt/tags`: https://quay.io/repository/biocontainers/ratt?tab=tags


.. raw:: html

    <script>
        var package = "ratt";
        var versions = ["1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratt/README.html