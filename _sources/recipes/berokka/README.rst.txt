:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'berokka'
.. highlight: bash

berokka
=======

.. conda:recipe:: berokka
   :replaces_section_title:
   :noindex:

   Trim\, circularise and orient long read bacterial genome assemblies.

   :homepage: https://github.com/tseemann/berokka
   :license: GPL / GPL-3.0
   :recipe: /`berokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka/meta.yaml>`_

   


.. conda:package:: berokka

   |downloads_berokka| |docker_berokka|

   :versions:
      
      

      ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2-3``,  ``0.2-2``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends on blast: ``>=2.7``
   :depends on perl: ``>=5.26``
   :depends on perl-bioperl: ``>=1.7.2``

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

    pixi global install berokka

to add into an existing workspace instead, run::

    pixi add berokka

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install berokka

Alternatively, to install into a new environment, run::

    conda create -n envname berokka

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/berokka:<tag>

(see `berokka/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_berokka| image:: https://img.shields.io/conda/dn/bioconda/berokka.svg?style=flat
   :target: https://anaconda.org/bioconda/berokka
   :alt:   (downloads)
.. |docker_berokka| image:: https://quay.io/repository/biocontainers/berokka/status
   :target: https://quay.io/repository/biocontainers/berokka
.. _`berokka/tags`: https://quay.io/repository/biocontainers/berokka?tab=tags


.. raw:: html

    <script>
        var package = "berokka";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/berokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/berokka/README.html